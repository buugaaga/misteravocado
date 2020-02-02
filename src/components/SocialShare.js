import React from 'react'
import { VKShareButton, VKIcon } from 'react-share'
import styled from '@emotion/styled'

const SContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SocialShare = ({ siteUrl }) => (
  <SContainer>
    <VKShareButton url={siteUrl}>
      <VKIcon size={40} round/>
    </VKShareButton> 
  </SContainer>
)

export default SocialShare