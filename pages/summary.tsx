import React from 'react';
import Balance from "../components/Balance";
import IncomeExpense from "../components/IncomeExpense";
import Link from "next/link";


const summary = () => {
    return (
        <div>
            <div>
                <Balance />
                <IncomeExpense />
            </div>
            <div className="buttonContainer">
                <Link href='./'><button className="button">Go Back</button></Link>
            </div>

        </div>
    );
};

export default summary;
