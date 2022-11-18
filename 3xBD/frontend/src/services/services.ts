import axios from "axios";
import constants from "../config/constants";

const API_PATH = `${constants.api.path}`;
export async function CreateAccout(
    name: string,
    nickname: string,
    email: string,
    password: string,
  ): Promise<any> {
  return await axios.post(
    `${API_PATH}/api/v1/user/user-create`,
    {
      name,
      nickname,
      email,
      password
    }
  )
}

export async function getLogin(
    email: string,
    password: string,
  ): Promise<any> {
  return await axios.post(
    `${API_PATH}/api/v1/user/users`,
    {
      email,
      password
    }
  )
}

export async function getMySpends(
    id: string,
  ): Promise<any> {
  return await axios.post(
    `${API_PATH}/api/v1/spend/show-my-spends`,
    {
      id,
    }
  )
}

export async function AddSpends(
    UserId: number,
    name: string,
    description: string,
    price: number,
    type_spend: number
  ): Promise<any> {
  return await axios.post(
    `${API_PATH}/api/v1/spend/spend`,
    {
      UserId,
      name,
      description,
      price,
      type_spend
    }
  )
}

export async function AddIncoming(
  UserId: number,
  earned_income: number,
  description: string,
  TypeIncome: string
): Promise<any> {
  
return await axios.post(
  `${API_PATH}/api/v1/performance/performance`,
  {
    UserId,
    earned_income,
    description,
    TypeIncome
  }
)
}


export async function getIncoming(
  id: string,
): Promise<any> {
return await axios.post(
  `${API_PATH}/api/v1/performance/show-my-performance`,
  {
    id,
  }
)
}