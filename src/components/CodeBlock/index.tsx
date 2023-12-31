import Highlight, { defaultProps, Language } from "prism-react-renderer"
import theme from './theme'

export type CodeBlockProps = {
  code: string
  language: Language
}

const CodeBlock = (props: CodeBlockProps) => {
  const { code, language } = props
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })}/>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock