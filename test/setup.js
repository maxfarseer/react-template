/* eslint-disable no-unused-vars */
import { jsdom } from 'jsdom'

require('mock-local-storage')

global.document = jsdom('')
global.window = document.defaultView
global.navigator = { userAgent: 'browser' }
/* eslint-enable */
