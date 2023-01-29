export const ADD_TRANSACTION = "ADD_TRANSACTION"
export const DELETE_TRANSACTION = "DELETE_TRANSACTION"

export const addTransaction = (transaction:any) => ({
    type: ADD_TRANSACTION,
    payload: transaction
})

export const deleteTransaction = (transactionId:any) => ({
    type: DELETE_TRANSACTION,
    payload: transactionId
})
