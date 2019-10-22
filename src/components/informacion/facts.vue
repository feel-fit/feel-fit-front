<template>
  <section class="performance-facts ">
    <header class="performance-facts__header">
      <h1 class="performance-facts__title text-uppercase">Informaci&oacute;n Nutricional</h1>
      <template v-for="item in top">
        <p>{{item.name}} {{item.quantity}}</p>
      </template>
    </header>
    <table class="table performance-facts__table">
      <thead>
      <tr>
        <th colspan="3" class="small-info text-uppercase">
          Cantidad por porci&oacute;n
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-for="item in superior">
        <tr :key="item.id">
          <th colspan="2">
            <b v-text="item.name">Calories</b> {{item.quantity}}
          </th>
          <td>
            {{ item.percentage }}%
          </td>
        </tr>
        <tr v-if="item.children.length > 0" v-for="child in item.children">
          <td class="blank-cell">
          </td>
          <th>
            {{child.name}} {{child.quantity}}
          </th>
          <td>
            <b>{{child.percentage}}%</b>
          </td>
        </tr>
      </template>
      <tr class="thick-row">
        <td colspan="3" class="small-info text-uppercase">
          <b>% Valores Diarios</b>
        </td>
      </tr>
      <template v-for="(item,key) in medio">
        <tr :class="{'thick-end':medio.length -1 == key}" :key="item.id">
          <th colspan="2">
            <b v-text="item.name">Calories</b> {{item.quantity}}
          </th>
          <td>
            {{ item.percentage }}%
          </td>
        </tr>
        <tr v-if="item.children.length > 0" v-for="child in item.children">
          <td class="blank-cell">
          </td>
          <th>
            {{child.name}} {{child.quantity}}
          </th>
          <td>
            <b>{{child.percentage}}%</b>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
    <table class="table performance-facts__table--grid">
      <tbody>
      <tr :class="{'thin-end':inferior.length -1 == key}" v-for="(item,key) in inferior">
        <td colspan="2">
          {{item[0].name}} {{ item[0].quantity }} {{ item[0].percentage }}
        </td>
        <td v-if="item.length > 1">
          {{item[1].name}} {{ item[1].quantity }} {{ item[1].percentage }}
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import { chunk, orderBy } from 'lodash'

export default {
  name: 'facts',
  props: {
    facts: {
      required: true,
      type: Array
    }
  },
  data () {
    return {}
  },
  mounted () {

  },
  computed: {
    top () {
      return orderBy(this.facts.filter(item => item.position_fact === 'top'), 'order')
    },
    superior () {
      return orderBy(this.facts.filter(item => item.position_fact === 'superior'), 'order')
    },
    medio () {
      return orderBy(this.facts.filter(item => item.position_fact === 'medio'), 'order')
    },
    inferior () {
      return chunk(orderBy(this.facts.filter(item => item.position_fact === 'inferior'), 'order'), 2)
    }
  }

}
</script>
<style lang="scss" scoped>
  body {
    font-size: small;
    line-height: 1.4;
  }
  p {
    margin: 0;
  }
  .performance-facts {
    border: 1px solid black;
    margin: 20px;
    float: left;
    padding: 0.5rem;
    width: 85%;
    table {
      border-collapse: collapse;
    }
  }
  .performance-facts__title {
    font-weight: bold;
    font-size: 2rem;
    margin: 0 0 0.25rem 0;
  }
  .performance-facts__header {
    border-bottom: 10px solid black;
    padding: 0 0 0.25rem 0;
    margin: 0 0 0.5rem 0;
    p {
      margin: 0;
    }
  }
  .performance-facts__table {
    width: 100%;
    thead tr {
      th, td {
        border: 0;
      }
    }
    th, td {
      font-weight: normal;
      text-align: left;
      padding: 0.25rem 0;
      border-top: 1px solid black;
      white-space: nowrap;
    }
    td {
      &:last-child {
        text-align: right;
      }
    }
    .blank-cell {
      width: 1rem;
      border-top: 0;
    }
    .thick-row {
      th, td {
        border-top-width: 5px;
      }
    }
  }
  .small-info {
    font-size: 0.7rem;
  }
  .performance-facts__table--small {
    @extend .performance-facts__table;
    border-bottom: 1px solid #999;
    margin: 0 0 0.5rem 0;
    thead {
      tr {
        border-bottom: 1px solid black;
      }
    }
    td {
      &:last-child {
        text-align: left;
      }
    }
    th, td {
      border: 0;
      padding: 0;
    }
  }
  .performance-facts__table--grid {
    @extend .performance-facts__table;
    margin: 0 0 0.5rem 0;
    td {
      &:last-child {
        text-align: left;
        &::before {
          content: "•";
          font-weight: bold;
          margin: 0 0.25rem 0 0;
        }
      }
    }
  }
  .text-center {
    text-align: center;
  }
  .thick-end {
    border-bottom: 10px solid black;
  }
  .thin-end {
    border-bottom: 1px solid black;
  }
</style>
