import React, {useRef, useState} from "react";
import { connect } from 'react-redux';
import { addTransaction } from "../redux/actions";
import Transaction from "../components/Transaction";
import {TextField} from "@mui/material";
import {Button,Paper} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import {any} from "prop-types";
import {color} from "@mui/system";

export function AddTransactions({id, addTransaction}:any) {

    const schema = yup.object().shape({
        text: yup.string().required("Expense name is required"),
        amount: yup.number().integer().required("Amount is a required field"),
        date: yup.string().required('Expense date field is required'),
    });
    const { handleSubmit, reset, control, register, formState: { errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
        shouldFocusError: true,
        criteriaMode: "all",
        reValidateMode: "onChange"
    });
    const text = useRef(null);
    const { ref, ...rest } = register('text');
    // const onSubmit = (data: any) => console.log(data);

    // const [text, setText] = useState("");
    // const [amount, setAmount] = useState(0);
    // const [date, setDate] = useState("");
    const onSubmit = (data:any) => {
        console.log(data);
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: data.text,
            amount: data.amount,
            date: data.date
        }
        addTransaction(newTransaction)
    }
    const today = new Date().toISOString().split("T")[0];
    console.log(today)

    return (
        <div className="column">
            <h3>Add Transaction</h3>
            <form>
                <div>
                    <Controller
                        name={"text"}
                        control={control}
                        render={({ formState,field: { onChange, value } }) => (
                            <TextField  sx={{ mb: '0.5rem' }} error={!!formState.errors?.text}  onChange={onChange}  value={value} label={"Text" +
                                " Value"} fullWidth
                            />
                        )}
                    />
                </div>
                <>{errors.text?.message}</>
                {/*{errors.text && <p>{errors.text.message.toString()}</p>}*/}

                <Controller
                name={"amount"}
                control={control}
                render={({ formState,field: { onChange, value } })  => (
                <TextField sx={{ mb: '0.5rem' }} error={!!formState.errors?.amount} onChange={onChange} value={value} label={"Amount"} type="number" fullWidth/>
                )}
                />
                {/*{console.log(errors.amount && <p>{errors.amount.message.toString()}</p>)}*/}
                <> {errors.amount?.message} </>

                <Controller
                    name={"date"}
                    control={control}
                    render={({ formState,field: { onChange, value } })  => (
                        // <input sx={{ mb: '1rem' }} onChange={onChange} value={value} type="date" min="2018-01-01" max={today}/>
                        <TextField sx={{ mb: '0.5rem' }} error={!!formState.errors?.date} onChange={onChange} value={value}  type="date" inputProps={{
                            min:"2018-01-01",
                            max: today
                        }}  fullWidth/>

                    )}
                />
                <> {errors.date?.message} </>
                <Button sx={{ mb: '1rem' }} variant="contained" onClick={handleSubmit(onSubmit)}>Submit</Button>
                <input value="Reset" type="button" onClick={() => {
                    reset({
                        text: "",
                        amount: "",
                        date: ""
                    }, );
                }} />
            </form>
            {/*<form onSubmit={onSubmit}>*/}
            {/*    <Controller*/}
            {/*        name={"textValue"}*/}
            {/*        control={control}*/}
            {/*        render={({ field: { onChange, value } }) => (*/}
            {/*            <TextField onChange={onChange} value={value} label={"Text Value"} />*/}
            {/*        )}*/}
            {/*    />*/}
            {/*    <div className="form-control">*/}
            {/*        /!*<label>Text</label>*!/*/}
            {/*        /!*<input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />*!/*/}
            {/*        <TextField id="outlined-basic" label="Text" variant="outlined" />*/}
            {/*    </div>*/}
            {/*    <div className="form-control">*/}
            {/*        <TextField id="outlined-basic" label="Text" variant="outlined" type="number"/>*/}
            {/*        /!*<input value={amount} onChange={(event:any) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />*!/*/}
            {/*    </div>*/}
            {/*    <div className="form-control">*/}
            {/*        <label>Date</label>*/}
            {/*        <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Amount..." type="date" />*/}
            {/*    </div>*/}
            {/*    <button className="btn">Add Transaction</button>*/}
            {/*</form>*/}
        </div>
    );
}

// const mapStateToProps = (state) => ({ // Maps the store of the store to the props of the component
//     transactions: state.transactions, // Maps the transactions of the store to the props of the component
//     id: Math.floor(Math.random() * 100000000)
// });

const mapDispatchToProps = (dispatch:any) => ({ // Maps the dispatch to the props of the component, contains properties that leads to different actions that you want to dispatch from the component
    addTransaction: (transaction:any) => dispatch(addTransaction(transaction))
    // deleteTransaction: (id) => dispatch(deleteTransaction(id)) // When these functions are called they dispatch an action to the store
});

export default connect(null, mapDispatchToProps)(AddTransactions);
