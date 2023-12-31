export const reactCode = `import { IconProvider } from '@twist-space/react-icons'
import { AiThunderboltFilled } from '@twist-space/react-icons/ai'
import { TiModeDark } from '@twist-space/react-icons/ti'

export default function App() {
  return (
    <IconProvider value={{ size: 60 }}>
      <AiThunderboltFilled color="#906efe" />
      <TiModeDark size={30} />
    </IconProvider>
  )
}`

export const vue3Code = `<script setup lang="ts">
import { IconProvider } from '@twist-space/vue3-icons'
import { AiThunderboltFilled } from '@twist-space/vue3-icons/ai'
import { TiModeDark } from '@twist-space/vue3-icons/ti'
</script>

<template>
  <IconProvider :size="60">
    <AiThunderboltFilled color="#906efe" />
    <TiModeDark :size="30" />
  </IconProvider>
</template>`

export const vue2Code = `<template>
  <IconProvider :size="60">
    <AiThunderboltFilled color="#906efe" />
    <TiModeDark :size="30" />
  </IconProvider>
</template>

<script>
import { IconProvider } from '@twist-space/vue2-icons'
import { AiThunderboltFilled } from '@twist-space/vue2-icons/ai'
import { TiModeDark } from '@twist-space/vue2-icons/ti'
export default {
components: {
  IconProvider,
  AiThunderboltFilled,
  TiModeDark,
},
}
</script>`