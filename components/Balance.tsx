import React from "react";
import { connect } from "react-redux";


export function Balance({ transactions }:any) {
    const amount = transactions.map((transaction:any) => Number(transaction.amount));
    const total = amount.reduce((acc:any, item:any) => acc + item, 0);
    return (
        <div className="balance">
            <h4>Your Balance</h4>
            <h1 className="total">${total}</h1>
        </div>
    );
}

const mapStateToProps = (state:any) => ({ // Maps the store of the store to the props of the component
    transactions: state.transactions, // Maps the transactions of the store to the props of the component
});

export default connect(mapStateToProps)(Balance);