import taskApiConfig from "./taskApiConfig";

export const getByAmount = ({quantity = 3}) => {
  return taskApiConfig.get(`/tasks?quantity=${quantity}`)
}

export const editOne = ({uuid, title, completed}) => {
  return taskApiConfig.put(`/tasks`, {uuid, title, completed})
}
