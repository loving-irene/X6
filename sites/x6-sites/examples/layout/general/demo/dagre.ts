import { Graph, Model } from '@antv/x6'
import { Layout } from '@antv/layout'

const data: Model.FromJSONData = {
  nodes: [],
  edges: [],
}
const edges = [
  ['1', '2'],
  ['2', '3'],
  ['2', '4'],
  ['4', '5'],
  ['4', '6'],
  ['4', '7'],
  ['4', '8'],
  ['5', '9'],
  ['6', '10'],
  ['7', '11'],
  ['8', '12']
]

for (let i = 1; i <= 12; i++) {
  data.nodes!.push({
    id: `${i}`,
    shape: 'rect',
    width: 60,
    height: 30,
    label: i,
    attrs: {
      body: {
        fill: '#855af2',
        stroke: 'transparent',
      },
      label: {
        fill: '#ffffff',
      },
    },
  })
}

edges.forEach((edge: [string, string]) => {
  data.edges!.push({
    source: edge[0],
    target: edge[1],
    attrs: {
      line: {
        stroke: '#fd6d6f',
        strokeWidth: 1,
      },
    },
  })
})

const graph = new Graph({
  container: document.getElementById('container')!,
  grid: true,
})

const dagreLayout = new Layout({
  type: 'dagre',
  rankdir: 'LR',
  align: 'UR',
  ranksep: 35,
  nodesep: 15,
})
const model = dagreLayout.layout(data)

graph.fromJSON(model)