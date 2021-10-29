export async function wait(milliseconds: 1000): Promise<string> {
  return new Promise(resolve => {
    if (isNaN(milliseconds)) {
      throw new Error('milliseconds not a numbers')
    }

    setTimeout(() => resolve('done!'), milliseconds)
  })
}

