const context = require.context('./', false, /\.ts$/);
const models = context
  .keys()
  .filter((item: string) => {
    if (item.includes('models')) {
      return false;
    }
    if (item === './index.ts' || item === './type.ts') {
      return false;
    }
    return true;
  })
  .map((key: any) => context(key));

export default models;
