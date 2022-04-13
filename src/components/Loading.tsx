import React from 'react'

export default function Loading() {
  return (
    <div style={{
        position: "fixed",
        display: 'flex',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.2)",
        color: "#fff"
    }}>Loading...</div>
  )
}
