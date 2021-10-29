import * as core from '@actions/core'
export * from './main'

export async function run(): Promise<void> {
  try {    
    core.setOutput('release-url','http://example.com')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
