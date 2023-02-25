import './Activities.scss'

const Activities = () => {
    return (
        <div className='activitiesContainer'>
            <h5>Latest Activities</h5>
            <div className='friendContainer'>
                <div className='friendInfo'>

                    <img src="https://images.unsplash.com/photo-1674471197073-e6826c2b788f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />

                    <p><span>Taylor Jackson</span> changed their cover picture.</p>

                </div>
                <div className='activityTimeContainer'>
                    <span className='lastestActivity'>1 min ago</span>
                </div>
            </div>
            <div className='friendContainer'>
                <div className='friendInfo'>

                    <img src="https://images.unsplash.com/photo-1672229092597-634c07cdc1d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=707&q=80" />

                    <p><span>Christian Boyd  </span> liked a post .</p>
                </div>
                <div className='activityTimeContainer'>
                    <span className='lastestActivity'>20 secs ago</span>
                </div>
            </div>
            <div className='friendContainer'>
                <div className='friendInfo'>

                    <img src="https://images.unsplash.com/photo-1674543513655-258d9895d4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />

                    <p><span>Bianca Derrickson</span> liked a comment.</p>
                </div>
                <div className='activityTimeContainer'>
                    <span className='lastestActivity'>15 min ago</span>
                </div>
            </div>
            <div className='friendContainer'>
                <div className='friendInfo'>

                    <img src="https://images.unsplash.com/photo-1674823502047-31afef7e495e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80" />

                    <p><span>Anthony Fraiser</span> changed their cover picture.</p>
                </div>
                <div className='activityTimeContainer'>
                    <span className='lastestActivity'>1 min ago</span>
                </div>
            </div>
        </div>
    )
}

export default Activities