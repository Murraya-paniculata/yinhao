import React from 'react'

export default function Error() {
  return (
    <div style={{
        position: "fixed",
        top: 30,
        right: 30,
        width: 80,
        height: 50
    }}>
        <h2>info tip</h2>
        <p>服务异常，请稍后重试</p>
    </div>
  )
}
