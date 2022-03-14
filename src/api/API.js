import axios from "axios"
import { config } from "../config"

const API = {
  createSendinBlueContact: async (email, name) => {
    try {
      const res = await axios.post(
        "https://api.sendinblue.com/v3/contacts",
        {
          email,
          listIds: config.sendinBlue.listIds,
          attributes: { FULLNAME: name }
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": config.sendinBlue.apiKey
          }
        }
      )
      return formatResponse(res)
    } catch (err) {
      return formatResponse(null, err)
    }
  }
}

// format response will return a response object {data: {} or [], err: string}
const formatResponse = (res, err, defaultErrStr) => {
  const formattedRes = {
    data: undefined,
    err: undefined
  }
  if (res && res.data) {
    formattedRes.data = res.data
  } else if (err && err.response && err.response.data && err.response.data.msg) {
    formattedRes.err = `${err.response.data.msg}`
  } else if (defaultErrStr) {
    formattedRes.err = defaultErrStr
  } else {
    formattedRes.err = "Unable to fetch from API"
  }
  return formattedRes
}

export { API }
