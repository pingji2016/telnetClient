<template>
    <div></div>
</template>

<script>
let $ = window.go.GraphObject.make

export default {
  name: '',
  props: ['modelData'],
  data () {
    return {
      diagram: null
    }
  },
  mounted () {
    console.log(window.go)
    let self = this
    let myDiagram =
            $(window.go.Diagram, this.$el,
              {
                initialContentAlignment: window.go.Spot.Center,
                // isReadOnly: true,
                layout: $(window.go.TreeLayout, {angle: 0, arrangement: window.go.TreeLayout.ArrangementHorizontal}),
                'undoManager.isEnabled': true,
                // Model ChangedEvents get passed up to component users
                'ModelChanged': function (e) {
                  self.$emit('model-changed', e)
                },
                'ChangedSelection': function (e) {
                  self.$emit('changed-selection', e)
                }
              })
    myDiagram.nodeTemplate =
            $(window.go.Node, 'Vertical',
              $(window.go.Picture,
                {
                  margin: 10,
                  width: 66,
                  height: 66,
                  background: 'red'
                },
                new window.go.Binding('source')),
              $(window.go.TextBlock,
                {margin: 8, editable: true},
                new window.go.Binding('text').makeTwoWay())
            )
    myDiagram.linkTemplate =
            $(window.go.Link,
              {
                routing: window.go.Link.AvoidsNodes,
                corner: 4,
                curve: window.go.Link.JumpGap,
                reshapable: true,
                resegmentable: true,
                relinkableFrom: true,
                relinkableTo: true
              },
              new window.go.Binding('points').makeTwoWay(),
              $(window.go.Shape),
              // eslint-disable-next-line standard/object-curly-even-spacing
              $(window.go.Shape, { stroke: '#2F4F4F', strokeWidth: 2, toArrow: ''}),
              $(window.go.TextBlock, { segmentOffset: new window.go.Point(0, -12) }, // 设置文字在线之上
                new window.go.Binding('text', 'text'))
            )
    myDiagram.selectionAdornmentTemplate =
      $(window.go.Adornment, 'Auto',
        $(window.go.Shape, { fill: null,
          stroke: 'deepskyblue',
          strokeWidth: 1.5,
          strokeDashArray: [4, 2] }
        ),
        $(window.go.Placeholder)
      )

    this.diagram = myDiagram
    this.updateModel(this.modelData)
  },
  watch: {
    modelData: function (val) {
      this.updateModel(val)
    }
  },
  computed: {},
  methods: {
    model: function () {
      return this.diagram.model
    },
    updateModel: function (val) {
      // No GoJS transaction permitted when replacing Diagram.model.
      if (val instanceof window.go.Model) {
        this.diagram.model = val
      } else {
        let m = new window.go.GraphLinksModel()
        if (val) {
          for (let p in val) {
            m[p] = val[p]
          }
        }
        this.diagram.model = m
      }
    },
    updateDiagramFromData: function () {
      this.diagram.startTransaction()
      // This is very general but very inefficient.
      // It would be better to modify the diagramData data by calling
      // Model.setDataProperty or Model.addNodeData, et al.
      this.diagram.updateAllRelationshipsFromData()
      this.diagram.updateAllTargetBindings()
      this.diagram.commitTransaction('updated')
    }
  }
}
</script>

<style>

</style>
