import React from 'react'
import CrudListItem from './CrudListItem'

class CrudList extends React.Component {
    constructor(props) {
        super()
        // this 바인딩
    }
    handler = (event) => {
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)
    }
    render() {
        // CrudApp와 
        const { list, user } = this.props
        const arrs = list.map((item, index) => {
            return (
                <CrudListItem item={item} key={index} {...this.props}></CrudListItem>
            )
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {arrs}
                </tbody>
            </table>
        )
    }
}

export default CrudList