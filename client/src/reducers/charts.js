const charts = ( state = [], action ) => {
  switch(action.type) {
    case 'CHARTS':
      return action.charts
    case 'ADD_CHART':
      return [action.chart, ...state];
    case 'UPDATE_CHART':
      return state.map ( c => {
        if (c.id === action.chart.id)
          return action.chart
        return c
      })
    case 'DELETE_CHART':
      return state.filter( chart => chart.id !== action.id)
    default:
      return state
  }
}

export default charts;
