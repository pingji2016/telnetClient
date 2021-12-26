export function getConf1 () {
  return new File(['RouterA:\n' +
    '  hostname: RTA\n' +
    '  ip: 172.16.0.1\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/0: 192.168.1.2,255.255.255.0\n' +
    '    lo0:  172.16.1.1,255.255.0.0\n' +
    '    lo1: 172.16.2.1,255.255.0.0\n' +
    '    lo2: 172.16.3.1,255.255.0.0\n' +
    '  command: router ospf 1,network 192.168.1.0 0.0.0.255 area 0,network 172.16.0.0 0.0.255.255 area 1\n' +
    '  ping: 192.168.1.1,192.168.2.1,192.168.2.2\n' +
    '  show: sh ip route ospf\n' +
    '  showtest: 192.168.2.0 via 192.168.1.1\n' +
    '\n' +
    'RouterB:\n' +
    '  hostname: RTB\n' +
    '  ip: 172.16.0.2\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/0: 192.168.1.1,255.255.255.0\n' +
    '    s0/0/1: 192.168.2.1,255.255.255.0\n' +
    '  command: router ospf 1,network 192.168.1.0 0.0.0.255 area 0,network 192.168.2.0 0.0.0.255 area 51\n' +
    '  ping: 192.168.1.2,192.168.2.2\n' +
    '  show: sh ip router ospf\n' +
    '  showtest: 172.16.1.1 via 192.168.1.2,172.16.2.1 via 192.168.1.2,172.16.3.1 via 192.168.1.2\n' +
    '\n' +
    'RouterC:\n' +
    '  hostname: RTC\n' +
    '  ip: 172.16.0.3\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/1: 192.168.2.2,255.255.255.0\n' +
    '    lo0: 172.24.2.1,255.255.0.0\n' +
    '  command: router ospf 1,network 192.168.2.0 0.0.0.255 area 51\n' +
    '  ping: 192.168.1.2,192.168.1.1,192.168.2.1\n' +
    '  show: sh ip router ospf\n' +
    '  showtest: 172.16.1.1 via 192.168.2.1,172.16.2.1 via 192.168.2.1,172.16.3.1 via 192.168.2.1,192.168.1.0 via 192.168.2.1\n' +
    '\n'],
  'conf.yml',
  {
    type: 'text/plain'
  })
}

export function getConf2 () {
  return new File(['RouterA:\n' +
    '  hostname: RTA\n' +
    '  ip: 172.16.0.1\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/0: 192.168.1.2,255.255.255.0\n' +
    '    lo0:  172.16.1.1,255.255.0.0\n' +
    '    lo1: 172.16.2.1,255.255.0.0\n' +
    '    lo2: 172.16.3.1,255.255.0.0\n' +
    '  command: router ospf 1,network 192.168.1.0 0.0.0.255 area 0,network 172.16.0.0 0.0.255.255 area 1\n' +
    '  ping: 192.168.1.1,192.168.2.1,192.168.2.2\n' +
    '  show: sh ip route ospf\n' +
    '  showtest: 192.168.2.0 via 192.168.1.1\n' +
    '\n' +
    'RouterB:\n' +
    '  hostname: RTB\n' +
    '  ip: 172.16.0.2\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/0: 192.168.1.1,255.255.255.0\n' +
    '    s0/0/1: 192.168.2.1,255.255.255.0\n' +
    '  command: router ospf 1,network 192.168.1.0 0.0.0.255 area 0,network 192.168.2.0 0.0.0.255 area 51\n' +
    '  ping: 192.168.1.2,192.168.2.2\n' +
    '  show: sh ip router ospf\n' +
    '  showtest: 172.16.1.1 via 192.168.1.2,172.16.2.1 via 192.168.1.2,172.16.3.1 via 192.168.1.2\n' +
    '\n' +
    'RouterC:\n' +
    '  hostname: RTC\n' +
    '  ip: 172.16.0.3\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/1: 192.168.2.2,255.255.255.0\n' +
    '    lo0: 172.24.2.1,255.255.0.0\n' +
    '  command: router ospf 1,network 192.168.2.0 0.0.0.255 area 51\n' +
    '  ping: 192.168.1.2,192.168.1.1,192.168.2.1\n' +
    '  show: sh ip router ospf\n' +
    '  showtest: 172.16.1.1 via 192.168.2.1,172.16.2.1 via 192.168.2.1,172.16.3.1 via 192.168.2.1,192.168.1.0 via 192.168.2.1\n' +
    '\n'],
  'conf.yml',
  {
    type: 'text/plain'
  })
}

export function getConf3 () {
  return new File(['RouterA:\n' +
    '  hostname: RTA\n' +
    '  ip: 172.16.0.1\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/0: 192.168.1.2,255.255.255.0\n' +
    '    lo0:  172.16.1.1,255.255.0.0\n' +
    '    lo1: 172.16.2.1,255.255.0.0\n' +
    '    lo2: 172.16.3.1,255.255.0.0\n' +
    '  command: router ospf 1,network 192.168.1.0 0.0.0.255 area 0,network 172.16.0.0 0.0.255.255 area 1\n' +
    '  ping: 192.168.1.1,192.168.2.1,192.168.2.2\n' +
    '  show: sh ip route ospf\n' +
    '  showtest: 192.168.2.0 via 192.168.1.1\n' +
    '\n' +
    'RouterB:\n' +
    '  hostname: RTB\n' +
    '  ip: 172.16.0.2\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/0: 192.168.1.1,255.255.255.0\n' +
    '    s0/0/1: 192.168.2.1,255.255.255.0\n' +
    '  command: router ospf 1,network 192.168.1.0 0.0.0.255 area 0,network 192.168.2.0 0.0.0.255 area 51\n' +
    '  ping: 192.168.1.2,192.168.2.2\n' +
    '  show: sh ip router ospf\n' +
    '  showtest: 172.16.1.1 via 192.168.1.2,172.16.2.1 via 192.168.1.2,172.16.3.1 via 192.168.1.2\n' +
    '\n' +
    'RouterC:\n' +
    '  hostname: RTC\n' +
    '  ip: 172.16.0.3\n' +
    '  password: CISCO\n' +
    '  port:\n' +
    '    s0/0/1: 192.168.2.2,255.255.255.0\n' +
    '    lo0: 172.24.2.1,255.255.0.0\n' +
    '  command: router ospf 1,network 192.168.2.0 0.0.0.255 area 51\n' +
    '  ping: 192.168.1.2,192.168.1.1,192.168.2.1\n' +
    '  show: sh ip router ospf\n' +
    '  showtest: 172.16.1.1 via 192.168.2.1,172.16.2.1 via 192.168.2.1,172.16.3.1 via 192.168.2.1,192.168.1.0 via 192.168.2.1\n' +
    '\n'],
  'conf.yml',
  {
    type: 'text/plain'
  })
}

export function getRouterAPort () {
  return [{
    port: 's0/0/0',
    ip: '192.168.1.2',
    mask: '255.255.255.0',
    status: 'Up'
  }, {
    port: 'lo0',
    ip: '172.16.1.1',
    mask: '255.255.0.0',
    status: 'Up'
  }, {
    port: 'lo1',
    ip: '172.16.2.1',
    mask: '255.255.0.0',
    status: 'Up'
  }, {
    port: 'lo2',
    ip: '172.16.3.1',
    mask: '255.255.0.0',
    status: 'Up'
  }]
}

export function getRouterBPort () {
  return [{
    port: 's0/0/1',
    ip: '192.168.1.2',
    mask: '255.255.255.0',
    status: 'Up'
  }, {
    port: 'lo0',
    ip: '172.16.1.1',
    mask: '255.255.0.0',
    status: 'Up'
  }, {
    port: 'lo1',
    ip: '172.16.2.1',
    mask: '255.255.0.0',
    status: 'Up'
  }, {
    port: 'lo2',
    ip: '172.16.3.1',
    mask: '255.255.0.0',
    status: 'Up'
  }]
}

export function getRouterCPort () {
  return [{
    port: 's0/0/2',
    ip: '192.168.1.2',
    mask: '255.255.255.0',
    status: 'Up'
  }, {
    port: 'lo0',
    ip: '172.16.1.1',
    mask: '255.255.0.0',
    status: 'Up'
  }, {
    port: 'lo1',
    ip: '172.16.2.1',
    mask: '255.255.0.0',
    status: 'Up'
  }, {
    port: 'lo2',
    ip: '172.16.3.1',
    mask: '255.255.0.0',
    status: 'Up'
  }]
}
