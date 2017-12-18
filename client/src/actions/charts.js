import axios from 'axios';

export const getCharts = () => {
  return(dispatch) => {
    axios.get('/api/charts')
      .then( ({data, headers}) => {
        dispatch({ type: 'CHARTS', charts: data, headers })
      })
  }
}

export const addChart = (chart) => {
  return(dispatch) => {
    axios.post('/api/charts', {chart})
      .then( res => dispatch({ type: 'ADD_CHART', post: res.data }))
  }
}

export const updateChart = (chart) => {
  return(dispatch) => {
    axios.put(`/api/charts/${chart.id}`, {chart})
    .then( res=> dispatch({ type: 'UPDATE_CHART', chart: res.data }))
  }
}

export const deleteChart = (id) => {
  return(dispatch) => {
    axios.delete(`/api/charts/${id}`)
      .then( () => dispatch({ type: 'DELETE_CHART', id: id }))
  }
}
