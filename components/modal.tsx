import { Dialog, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useActions } from "@/hooks"
import { ShadowDom } from "@/components/shadow-dom"
import type { IconType } from "@twistify/react-icons"

interface ModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  prefix: string
  name: string
  Icon: React.ReactElement<IconType>
}

export function Modal(props: ModalProps) {
  const { open, setOpen, prefix, name: IconName, Icon } = props
  const { copyName, copySVG, copyComponentCode, downloadSVG, downloadPNG } = useActions()

  const snippets = [
    {
      name: 'Copy Name',
      onCopy: () => copyName(IconName)
    },
    {
      name: 'Copy SVG',
      onCopy: () => copySVG(Icon)
    },
    {
      name: 'Copy React Code',
      onCopy: () => copyComponentCode(IconName)
    },
    {
      name: 'Copy Vue Code',
      onCopy: () => copyComponentCode(IconName)
    }
  ]

  const download = [
    {
      name: 'Download SVG',
      onCopy: () => downloadSVG(IconName, Icon)
    },
    {
      name: 'Download PNG',
      onCopy: () => downloadPNG(IconName, Icon)
    }
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`${prefix}/${IconName}`}</DialogTitle>
          <ShadowDom className="flex justify-center py-2 border-b transition-all">
            {Icon}
          </ShadowDom>
          <div className="flex flex-col gap-2">
            <div>Snippets</div>
            <div className="flex gap-2">
              {
                snippets.map(({ name, onCopy }) => (
                  <Button
                    key={name}
                    onClick={onCopy}
                    size='sm'
                    variant="outline"
                  >
                    {name}
                  </Button>
                ))
              }
            </div>
            <div>Download</div>
            <div className="flex gap-2">
              {
                download.map(({ name, onCopy }) => (
                  <Button
                    key={name}
                    onClick={onCopy}
                    size='sm'
                    variant='secondary'
                  >
                    {name}
                  </Button>
                ))
              }
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}