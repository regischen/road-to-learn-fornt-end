import React from 'react';
import ReactDOM from 'react-dom';
import { func } from 'prop-types';

// class Number0 extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <button onClick={this.props.handlerClick} className='number0'>
//                 0
//             </button>
//         )
//     }
// }

class Number1 extends React.Component{
    constructor(props) {
        super(props);
        this.myHandlerClick = this.myHandlerClick.bind(this);
    }
    myHandlerClick() {
        this.props.handlerClick('1');
    }
    render() {
        return (
            <button onClick={this.myHandlerClick} className='number1'>
                1
            </button>
        )
    }
}

class Number2 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number2'>
                2
            </button>
        )
    }
}

class Number3 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number3'>
                3
            </button>
        )
    }
}
class Number4 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number4'>
                4
            </button>
        )
    }
}
class Number5 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number5'>
                5
            </button>
        )
    }
}
class Number6 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number6'>
                6
            </button>
        )
    }
}
class Number7 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number7'>
                7
            </button>
        )
    }
}
class Number8 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number8'>
                8
            </button>
        )
    }
}

class Number9 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='number9'>
                9
            </button>
        )
    }
}

class NumberDot extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const sty = {
        //     width:
        // }
        return (
            <button className='numberdot'>
                .
            </button>
        )
    }
}

class OperationPlus extends React.Component{
    constructor(props) {
        super(props);
        this.myHandleClick = this.myHandleClick.bind(this);
    }
    myHandleClick(){
        this.props.handlerClick('+');
    }
    render() {
        return (
            <button onClick={this.myHandleClick} className='operationplus'>
                +
            </button>
        )
    }
}

class OperationMinus extends React.Component{
    constructor(props) {
        super(props);
        this.myHandleClick = this.myHandleClick.bind(this);
    }
    myHandleClick(){
        this.props.handlerClick('-');
    }
    render() { 
        return (
            <button onClick={this.myHandleClick} className='operationminus'>
                -
            </button>
        )
    }
}

class OperationMul extends React.Component{
    constructor(props) {
        super(props);
        this.myHandleClick = this.myHandleClick.bind(this);
    }
    myHandleClick(){
        this.props.handlerClick('*');
    }
    render() {
        return (
            <button onClick={this.myHandleClick} className='operationmul'>
                x
            </button>
        )
    }
}

class OperationDiv extends React.Component{
    constructor(props) {
        super(props);
        this.myHandleClick = this.myHandleClick.bind(this);
    }
    myHandleClick(){
        this.props.handlerClick('/');
    }
    render() {
        return (
            <button onClick={this.myHandleClick} className='operationdiv'>
                /
            </button>
        )
    }
}

class OperationAC extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.handlerClick} className='operationac'>
                AC
            </button>
        )
    }
}

class OperationEqual extends React.Component{
    constructor(props) {
        super(props);
        this.myHandleClick = this.myHandleClick.bind(this);
    }
    myHandleClick(){
        this.props.handlerClick('=');
    }
    render() {
        return (
            <button
             onClick={this.myHandleClick} className='operationequal'>
                =
            </button>
        )
    }
}

class Output extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='output'>
                {this.props.expression}
                <br/><br/>
                {this.props.res}
            </div>
        )
    }
}

const Number0 = function(props){
    const myHandleClick = () =>{
        props.handlerClick('0');
    }
    return <button onClick={myHandleClick} className='number0'>0</button>
}

class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            expression : '0',
        };
        this.handlerClick = this.handlerClick.bind(this);
        this.handleAC = this.handleAC.bind(this);
        this.opHandleClick = this.opHandleClick.bind(this);
    }
    handlerClick(number) {
        if(this.state.expression === '0') this.state.expression = number;
        else this.state.expression += number;
        this.setState({
            expression : this.state.expression,
        });
    }
    opHandleClick(op) {
        if(op === '='){

        }else{
            // const last = this.state.expression[this.state.expression.length-1];
            const re = /\d$/
            if(re.test(this.state.expression)){
                this.setState({
                    expression : this.state.expression + op,
                })
            }
            else{
                this.setState({
                    expression : this.state.expression.slice(0,this.state.expression.length-1) + op,
                })
            }
        }
    }
    handleAC() {
        this.setState({
            expression : '0',
        })
    }

    render() {
        return (
            <div className='calculator' >
                <Number0 handlerClick={this.handlerClick}/>
                <Number1 handlerClick={this.handlerClick}/>
                <Number2 handlerClick={this.handlerClick}/>
                <Number3 />
                <Number4 />
                <Number5 />
                <Number6 />
                <Number7 />
                <Number8 />
                <Number9 />
                <NumberDot />
                <OperationPlus handlerClick={this.opHandleClick}/>
                <OperationMinus handlerClick={this.opHandleClick}/>
                <OperationMul handlerClick={this.opHandleClick}/>
                <OperationDiv handlerClick={this.opHandleClick}/>
                <OperationAC handlerClick={this.handleAC}/>
                <OperationEqual handlerClick={this.opHandleClick}/>
                <Output expression={this.state.expression} 
                        res={0}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);