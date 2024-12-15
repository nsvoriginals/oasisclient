import React from 'react'
import styled from 'styled-components'

import { useAppSelector } from '../hooks'

import RoomSelectionDialog from '../components/RoomSelectionDialog'
import LoginDialog from '../components/LoginDialog'
import ComputerDialog from '../components/ComputerDialog'
import WhiteboardDialog from '../components/WhiteboardDialog'
import VideoConnectionDialog from '../components/VideoConnectionDialog'
import Chat from '../components/Chat'
import HelperButtonGroup from '../components/HelperButtonGroup'
import MobileVirtualJoystick from '../components/MobileVirtualJoystick'
import Sidebar from '../components/Sidebar' // Import the Sidebar component

const Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

function Start() {
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const computerDialogOpen = useAppSelector((state) => state.computer.computerDialogOpen)
  const whiteboardDialogOpen = useAppSelector((state) => state.whiteboard.whiteboardDialogOpen)
  const videoConnected = useAppSelector((state) => state.user.videoConnected)
  const roomJoined = useAppSelector((state) => state.room.roomJoined)

  let ui: JSX.Element
  if (loggedIn) {
    if (computerDialogOpen) {
      ui = <ComputerDialog />
    } else if (whiteboardDialogOpen) {
      ui = <WhiteboardDialog />
    } else {
      ui = (
        <>
          <Chat />
          {!videoConnected && <VideoConnectionDialog />}
          <MobileVirtualJoystick />
        </>
      )
    }
  } else if (roomJoined) {
    ui = <LoginDialog />
  } else {
    ui = <RoomSelectionDialog />
  }

  return (
    <Backdrop>
      {ui}
      {!computerDialogOpen && !whiteboardDialogOpen && <HelperButtonGroup />}
      {roomJoined && <Sidebar />}
    </Backdrop>
  )
}

export default Start