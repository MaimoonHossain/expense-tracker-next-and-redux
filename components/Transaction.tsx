import React from "react";
import {deleteTransaction} from "../redux/actions";
import {connect} from "react-redux";
// import {TransactionsList} from "./TransactionsList";
// import {transaction, deleteTransaction} from "../redux/GlobalStore";

export function Transaction({ transaction, deleteTransaction }:any) {
    let sign = transaction.amount >= 0 ? "+" : "-";
    return (
        <li className={transaction.amount >= 0 ? "plus" : "minus"}>
            {transaction.text}
            <span>
        <span style={{ marginRight: 8 }}>{transaction.date}</span>
                {sign}${Math.abs(transaction.amount)}
      </span>
            <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
            >
                X
            </button>
        </li>
    );
}

const mapStateToProps = (state:any) => ({ // Maps the store of the store to the props of the component
    transactions: state.transactions, // Maps the transactions of the store to the props of the component
});

const mapDispatchToProps = (dispatch:any) => ({ // Maps the dispatch to the props of the component, contains properties that leads to different actions that you want to dispatch from the component
    // addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    deleteTransaction: (id:any) => dispatch(deleteTransaction(id)) // When these functions are called they dispatch an action to the store
});

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);