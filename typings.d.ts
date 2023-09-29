declare module NodeJS {
    interface Global {
      require: NodeRequire;
    }
  }
  
  // Merge into NodeRequire interface
  declare global {
    const require: NodeRequire & {
        context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => any;
    }
  }