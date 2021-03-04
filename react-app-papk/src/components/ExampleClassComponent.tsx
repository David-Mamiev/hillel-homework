import React from 'react'

export default class ExampleClassComponent extends React.Component<{
    num:number;
}> {
    state = {
        increment: 0,
        value: '',
    };

    componentDidMount() {
        console.log("I AM READY!");
    }
    componentWillMount() {
        console.log("Unmounting...");
    }


    handlInc = () => {
        const { increment } = this.state;
        this.setState({
            increment: increment + 1,
        });
        console.log(this.state.increment);
    };

    render() {
        const { num } = this.props;
        const { increment } = this.state;
        return (
            <div onClick={this.handlInc}>
                Example {increment} {num}
            </div>
        );
    };
};