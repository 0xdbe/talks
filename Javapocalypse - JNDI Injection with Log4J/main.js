import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'

import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'

import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({
    hash: true,
    history: true,
    slideNumber: true,
    width: 1280,
    height: 720,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
    })