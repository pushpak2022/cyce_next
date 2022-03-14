// this is to make sure we are not missing any variables from .env

if (!process.env.REACT_APP_ENV) {
  throw new Error("REACT_APP_ENV required from env")
}
if (!process.env.REACT_APP_ALERTS) {
  throw new Error("REACT_APP_ALERTS required from env")
}
if (!process.env.REACT_APP_URL) {
  throw new Error("REACT_APP_URL required from env")
}

const config = {
  version: process.env.REACT_APP_VERSION || process.env.npm_package_version || "",
  env: process.env.REACT_APP_ENV,
  apiUrl: process.env.REACT_APP_API_URL,
  appUrl: process.env.REACT_APP_URL,
  nodePath: process.env.NODE_PATH,
  alerts: Boolean(process.env.REACT_APP_ALERTS === "true"),
  sendinBlue: {
    apiKey: process.env.REACT_APP_SENDIN_BLUE_API_KEY,
    // this should be comma seperated in .env, if more than one id
    listIds: process.env.REACT_APP_SENDIN_BLUE_LIST_IDS
      ? process.env.REACT_APP_SENDIN_BLUE_LIST_IDS.split(",").map(id => Number(id))
      : []
  }
}

module.exports.config = config
