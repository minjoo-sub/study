import React from 'react'

class CrudListItem extends React.Component {
    state = {
        isEditMode: false,
    }
    constructor(props) {
        super()
        // this 바인딩

        // ref 생성
        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();
    }
    doDel = (event) => {
        //CrudApp.doDel() 메서드 호출
        const { item } = this.props;
        this.props.doDel(item.id); //CrudApp.doDel();
    }
    doUp = (event) => {
        //CrudApp.doUp() 메서드 호출
        const { item } = this.props;
        this.props.doUp(item.id); //CrudApp.doUp();
    }
    doDown = (event) => {
        //CrudApp.doDown() 메서드 호출
        const { item } = this.props;
        this.props.doDown(item.id); //CrudApp.doDown();
    }
    doEdit = (event) => {
        const item = this.props.item;
        // this.props.doEdit(item); //CrudApp.doEdit();
        // this.state.isEditMode 를 바꾼다.
        this.setState({
            ...this.state,
            isEditMode: !this.state.isEditMode
        });
    }
    doSave = (event) => {
        const item = this.props.item;

        //ref 를 사용하여 현재 입력된 값을 가져온다. 
        // const name = this.refUserName.current.value
        // const power = Number(this.refUserPower.current.value)

        const newitem = {
            id: item.id,
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value)
        }

        this.props.doEdit(newitem); //CrudApp.doEdit();

        // this.state.isEditMode 를 바꾼다.
        this.setState({
            ...this.state,
            isEditMode: !this.state.isEditMode
        });
    }
    render() {
        const { item } = this.props;
        // 화면 표시
        const formView = (
            <tr className="">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.power}</td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                </td>
            </tr>
        )

        // 화면 수정
        const formEdit = (
            <tr className="">
                <td>{item.id}</td>
                <td><input type="text" ref={this.refUserName} defaultValue={item.name} /></td>
                <td><input type="text" ref={this.refUserPower} defaultValue={item.power} /></td>
                <td>
                    <button onClick={this.doDel}>Del</button>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                </td>
            </tr>
        )

        if (this.state.isEditMode == true) {
            return formEdit;
        } else {
            return formView;
        }
    }
}

export default CrudListItem