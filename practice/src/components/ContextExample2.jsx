import React from 'react'
import PageOne from './PageOne'
import MyDetailsProvider from './context/MyDetailsProvider'
import KrishnaProvider from './context/KrishnaProvider'
const ContextExample2 = () => {
  return (
    <div>
      <MyDetailsProvider>
        <p>Context example 2</p>
        <KrishnaProvider>
          <PageOne />

        </KrishnaProvider>

      </MyDetailsProvider>
    </div>
  )
}

export default ContextExample2
