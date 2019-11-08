import React, { Component } from 'react'
import TopicForm from './TopicForm'

export default class TopicList extends Component {
    state = { Id: "", Title: "", Tag: "", Notes: "", Source: "", TimeStudied: "", Level: "", StartDate: "", Completed: "", CompletionDate: "" }
    addTopic = topic => {
        const { title, tag, notes, src, ts, lvl, sd, completed, cd } = topic;
        this.setState({ Title: title, Tag: tag, Notes: notes, Source: src, TimeStudied: ts, Level: lvl, StartDate: sd, Completed: completed, CompletionDate: cd });
        // this.props.data.unshift(this.state);
    }
    renderData() {
        return this.props.data.map((item, index) => {
            const { Title, Tag, Notes, Source, TimeStudied, Level, StartDate, Completed, CompletionDate } = item
            return (
                <tr key={index}>
                    <td>{Title}</td>
                    <td>{Tag}</td>
                    <td>{Notes}</td>
                    <td>{Source}</td>
                    <td>{TimeStudied}</td>
                    <td>{Level}</td>
                    <td>{StartDate}</td>
                    <td>{Completed}</td>
                    <td>{CompletionDate}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                {/* <TopicForm addCallback={this.addTopic} /> */}
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Tag</th>
                            <th>Notes</th>
                            <th>Source</th>
                            <th>Time Studied</th>
                            <th>Level</th>
                            <th>Start Date</th>
                            <th>Completed</th>
                            <th>Completion Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
