
export type ClassesParam = Record<string, boolean> | string | undefined | null


export const className = (...args: ClassesParam[]): string => {
  let classes: Record<string, any> = {};

  for (let arg of args) {
    if (typeof arg == 'string') {
      for (const className of arg.split(/\s+/).filter(Boolean)) {
        classes[className] = true
      }
    } else if (arg && typeof arg == 'object') {
      for (let className in arg) {
        classes[className] = !!arg[className]
      }
    }
  }
  
  let returnClassName = ""
  for(let className in classes){
    if(classes[className]){
      returnClassName += className + " "
    }
  }

  return returnClassName.trim()
}