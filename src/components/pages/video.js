import React, { Component } from 'react'

export default class video extends Component {
    render() {
        return (
            <div className="uk-flex uk-margin uk-text-center">
                <div class="uk-margin-auto uk-margin-auto-vertical uk-width-1-3@s uk-card uk-card-body">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ibuUmMhD2Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}
