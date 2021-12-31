export function getConf1 () {
  return new File(['test:\n' +
    '  Router: RouterA\n' +
    '  case1:\n' +
    '    input: ping 192.168.2.2\n' +
    '    output: ""\n' +
    '  case2: \n' +
    '    input: ping 172.24.2.1\n' +
    '    output: ""\n' +
    '  case3: \n' +
    '    input: show ip route\n' +
    '    output: ""\n' +
    '  case4:\n' +
    '    input: show ip ospf\n' +
    '    output: ""\n' +
    '  case5: \n' +
    '    input: traceroute 192.168.2.2\n' +
    '    output: ""'],
  'testOSPF.yml',
  {
    type: 'text/plain'
  })
}

export function getConf2 () {
  return new File(['test: \n' +
    '  Router: RouterA # 测试的路由器名\n' +
    '  case1: \n' +
    '    input: ping 192.168.30.2\n' +
    '    output: "Type escape sequence to abort.\\nSending 5, 100-byte ICMP Echos to 192.168.30.2, timeout is 2 seconds:\\n!!!!!\\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 24/30/45 ms"\n' +
    '  case2: \n' +
    '    input: ping 192.168.40.1\n' +
    '    output: "Type escape sequence to abort.\\nSending 5, 100-byte ICMP Echos to 192.168.30.2, timeout is 2 seconds:\\n!!!!!\\nSuccess rate is 100 percent (5/5), round-trip min/avg/max = 24/30/45 ms"\n' +
    '  case3: \n' +
    '    input: show ip route\n' +
    '    output: "Codes: L - local, C - connected, S - static, R - RIP, M - mobile, B - BGP/n       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area/n       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2/n       E1 - OSPF external type 1, E2 - OSPF external type 2, E - EGP/n       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area/n       * - candidate default, U - per-user static route, o - ODR/n       P - periodic downloaded static route/n/nGateway of last resort is not set/n/n     192.168.10.0/24 is variably subnetted, 2 subnets, 2 masks/nC       192.168.10.0/24 is directly connected, Loopback0/nL       192.168.10.1/32 is directly connected, Loopback0/n     192.168.20.0/24 is variably subnetted, 2 subnets, 2 masks/nC       192.168.20.0/24 is directly connected, Serial0/0/0/nL       192.168.20.1/32 is directly connected, Serial0/0/0/nR    192.168.30.0/24 [120/1] via 192.168.20.2, 00:00:03, Serial0/0/0/nR    192.168.40.0/24 [120/2] via 192.168.20.2, 00:00:03, Serial0/0/0"\n' +
    '  case4: \n' +
    '    input: show int lo0\n' +
    '    output: "Loopback0 is up, line protocol is up (connected)/n  Hardware is Loopback/n  Internet address is 192.168.10.1/24/n  MTU 1514 bytes, BW 8000000 Kbit, DLY 5000 usec,/n     reliability 255/255, txload 1/255, rxload 1/255/n  Encapsulation LOOPBACK, loopback not set/n  Last input never, output never, output hang never/n  Last clearing of \\"show interface\\" counters never/n  Queueing strategy: fifo/n  Output queue 0/0, 0 drops; input queue 0/75, 0 drops/n  5 minute input rate 0 bits/sec, 0 packets/sec/n  5 minute output rate 0 bits/sec, 0 packets/sec/n     0 packets input, 0 bytes, 0 no buffer/n     Received 0 broadcasts, 0 runts, 0 giants, 0 throttles/n     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored, 0 abort/n     0 input packets with dribble condition detected/n     0 packets output, 0 bytes, 0 underruns/n     0 output errors, 0 collisions, 0 interface resets/n     0 babbles, 0 late collision, 0 deferred/n     0 lost carrier, 0 no carrier/n     0 output buffer failures, 0 output buffers swapped out"\n' +
    '  case5: \n' +
    '    input: traceroute 192.168.40.1\n' +
    '    output: "Type escape sequence to abort.\\nTracing the route to 192.168.40.1\\n\\n  1   192.168.20.2    0 msec    16 msec   16 msec   \\n  2   192.168.30.2    21 msec   0 msec    29 msec"'],
  'testRIP.yml',
  {
    type: 'text/plain'
  })
}

export function getConf3 () {
  return new File(['test: \n' +
    '  Router: RouterA\n' +
    '  case1: \n' +
    '    input: ping 192.168.30.2\n' +
    '    output: ""\n' +
    '  case2: \n' +
    '    input: ping 3.3.3.3\n' +
    '    output: ""\n' +
    '  case3: \n' +
    '    input: show int s0/0/0\n' +
    '    output: ""\n' +
    '  case4: \n' +
    '    input: show ip route\n' +
    '    output: ""\n' +
    '  case5: \n' +
    '    input: traceroute 3.3.3.3\n' +
    '    ouput: ""'],
  'testStatic.yml',
  {
    type: 'text/plain'
  })
}

export function getRouterAPort (confName) {
  if (confName === 'ripConf.yml') {
    return [{
      port: 's0/0/0',
      ip: '192.168.20.2',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 's0/0/1',
      ip: '',
      mask: '',
      status: ''
    }, {
      port: 'lo0',
      ip: '192.162.10.1',
      mask: '255.255.0.0',
      status: 'Up'
    }, {
      port: 'lo1',
      ip: '',
      mask: '',
      status: ''
    }]
  } else if (confName === 'staticRouterConf.yml') {
    return [{
      port: 's0/0/0',
      ip: '192.168.20.1',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 's0/0/1',
      ip: '',
      mask: '',
      status: ''
    }, {
      port: 'lo0',
      ip: '1.1.1.1',
      mask: '255.255.0.0',
      status: 'Up'
    }, {
      port: 'lo1',
      ip: '',
      mask: '',
      status: ''
    }]
  } else {
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
}

export function getRouterBPort (confName) {
  if (confName === 'ripConf.yml') {
    return [{
      port: 's0/0/0',
      ip: '192.168.20.2',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 's0/0/1',
      ip: '192.168.30.1',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 'lo0',
      ip: '',
      mask: '',
      status: ''
    }, {
      port: 'lo1',
      ip: '',
      mask: '',
      status: ''
    }]
  } else if (confName === 'staticRouterConf.yml') {
    return [{
      port: 's0/0/0',
      ip: '192.168.20.2',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 's0/0/1',
      ip: '192.168.30.1',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 'lo0',
      ip: '2.2.2.2',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 'lo1',
      ip: '',
      mask: '',
      status: ''
    }]
  } else {
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
}

export function getRouterCPort (confName) {
  if (confName === 'ripConf.yml') {
    return [{
      port: 's0/0/0',
      ip: '192.168.30.2',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 's0/0/1',
      ip: '',
      mask: '',
      status: ''
    }, {
      port: 'lo0',
      ip: '192.168.40.1',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 'lo1',
      ip: '',
      mask: '',
      status: ''
    }]
  } else if (confName === 'staticRouterConf.yml') {
    return [{
      port: 's0/0/0',
      ip: '192.168.30.2',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 's0/0/1',
      ip: '',
      mask: '',
      status: ''
    }, {
      port: 'lo0',
      ip: '3.3.3.3',
      mask: '255.255.255.0',
      status: 'Up'
    }, {
      port: 'lo1',
      ip: '',
      mask: '',
      status: ''
    }]
  } else {
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
}
