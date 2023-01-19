import { connect } from 'react-redux'

import { TaskList } from '@/components/TaskList'

const mapStateToProps = (state: any) => ({
  tasks: state.tasks,
})

export default connect(mapStateToProps)(TaskList)
