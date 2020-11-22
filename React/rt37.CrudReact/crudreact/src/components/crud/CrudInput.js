import React from 'react'

class CrudInput extends React.Component {

    constructor(props) {
        super()
        // this 바인딩
        //ref 만들기
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    doIns = (event) => {
        const newitem = {
            id: null,
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value)
        }

        this.props.doIns(newitem); //CrudApp.doIns();
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Creat Read Update Delete</h1>
                    <div>
                        <label htmlFor="">Name : </label>
                        <input type="text" ref={this.refUserName} />
                    </div>
                    <div>
                        <label htmlFor="">Power : </label>
                        <input type="text" ref={this.refUserPower} />
                    </div>
                    <button onClick={this.doIns}>Add</button>
                    <hr />
                </div>
            </div>

        )
    }
}

export default CrudInput