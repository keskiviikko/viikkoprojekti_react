import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class TopicForm extends Component {
    render() {
        return (
            <div className="TopicForm AppComponent">
                <h2>Topic Form</h2>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter topic title" required='required' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridTag">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control type="text" placeholder="Enter tag" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNotes">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows="4" placeholder="Your notes" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSource">
                            <Form.Label>Source</Form.Label>
                            <Form.Control type="text" placeholder="Enter source" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridTime">
                            <Form.Label>Time Studied</Form.Label>
                            <Form.Control type="number" placeholder="Number of weeks" />
                            <Form.Text className="tip">Tip: How many weeks have you studied this topic?</Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLevel">
                            <Form.Label>Proficiency Level</Form.Label>
                            <Form.Control as="select">
                                <option>Not Applicable</option>
                                <option>Fundamental Awareness (basic knowledge)</option>
                                <option>Novice (limited experience)</option>
                                <option>Intermediate (practical application)</option>
                                <option>Advanced (applied theory)</option>
                                <option>Expert (recognized authority)</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridStart">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCompletion">
                            <Form.Label>Completion Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridProgress">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Completed"
                        />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        )
    }
}
