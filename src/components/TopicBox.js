import React, { Component } from 'react'
import TopicList from './TopicList'


export default class TopicBox extends Component {
    render() {
        return (
            <div>
                <TopicList data={obj} />
            </div>
        )
    }
}

const topicsjson = '[{"Id":4980,"Title":"jQuery","Tag":"jquery","Notes":"jQuery is pretty useful and I prefer working with it.","Source":"Academy lectures","Time Studied":12,"Level":2,"StartDate":"2019-09-30","Completed":"false","CompletionDate":""},{"Id":9653,"Title":"SQL","Tag":"sql","Notes":"On ollut vaikeeta.","Source":"Academy","Time Studied":10,"Level":1,"StartDate":"2019-10-28","Completed":"false","CompletionDate":""}]';

var obj = JSON.parse(topicsjson);