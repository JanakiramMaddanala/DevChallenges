export const logMiddleware = (storeAPI) => (next) => (action) => {
  console.log(`[LOG]: ${action}`);
  console.log(storeAPI);
  console.log(next.name);
  next(action);
};
