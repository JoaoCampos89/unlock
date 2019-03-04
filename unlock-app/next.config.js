/* eslint no-console: 0 */

const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const withSourceMaps = require('@zeit/next-source-maps')

const copyFile = promisify(fs.copyFile)

const requiredConfigVariables = {
  unlockEnv: process.env.UNLOCK_ENV || 'dev',
  httpProvider: process.env.HTTP_PROVIDER || '127.0.0.1',
  paywallUrl: process.env.PAYWALL_URL,
  paywallScriptUrl: process.env.PAYWALL_SCRIPT_URL,
  readOnlyProvider: process.env.READ_ONLY_PROVIDER,
  locksmithHost: process.env.LOCKSMITH_URI,
}

Object.keys(requiredConfigVariables).forEach(configVariableName => {
  if (!requiredConfigVariables[configVariableName]) {
    if (['test', 'dev'].indexOf(requiredConfigVariables.unlockEnv) > -1) {
      console.error(
        `The configuration variable ${configVariableName} is falsy.`
      )
    } else {
      process.exit(
        `The application cannot be started because the variable ${configVariableName} is falsy`
      )
    }
  }
})

module.exports = withSourceMaps({
  publicRuntimeConfig: requiredConfigVariables,
  webpack(config) {
    return config
  },
  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    // Export robots.txt and humans.txt in non-dev environments
    if (!dev && outDir) {
      await copyFile(
        join(dir, 'static', 'robots.txt'),
        join(outDir, 'robots.txt')
      )
      await copyFile(
        join(dir, 'static', 'humans.txt'),
        join(outDir, 'humans.txt')
      )

      // Export _redirects which is used by netlify for URL rewrites
      await copyFile(
        join(dir, 'static', '_redirects'),
        join(outDir, '_redirects')
      )
    }

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/jobs': { page: '/jobs' },
      '/dashboard': { page: '/dashboard' },
      '/paywall': { page: '/paywall' },
      '/demo': { page: '/demo' },
      '/terms': { page: '/terms' },
      '/privacy': { page: '/privacy' },
      '/log': { page: '/log' },
    }
  },
})
