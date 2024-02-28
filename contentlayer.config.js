import path from 'path'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from 'remark-gfm'
import { getHighlighter, loadTheme } from "shiki"
import { visit } from "unist-util-visit"


export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: (docs) => `/docs/${docs._raw.flattenedPath}` }
  }
}))

export default makeSource({
  contentDirPath: './docs',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') {
              return
            }
            node.__rawString__ = codeEl.children?.[0].value
          }
        })
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path.join(process.cwd(), '/lib/themes/dark.json')
            )
            return await getHighlighter({ theme })
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          }
        }
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return
            }
            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') {
              return
            }
            preElement.properties['__rawString__'] = node.__rawString__
          }
        })
      }
    ]
  }
})