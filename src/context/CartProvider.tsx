export type CartItemType = {
  sku: string,
  name: string,
  price: number,
  qty: number,
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload is missing in ADD action')
      }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload is missing in REMOVE action')
      }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload is missing in QUANTITY action')
      }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ... state, cart: []} // when click submit reset cart to empty until we link to a backend server
    }
    default: {
      throw new Error('Unidentified reducer action type')
    }
  }
}