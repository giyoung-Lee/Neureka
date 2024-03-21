import styled from 'styled-components'

export const NewCardBox = styled.div`
  background-color: white;
  height: 300px;
  /* border-radius: 10px; */
  overflow: hidden;
  box-shadow: var(--shadow);
  cursor: pointer;
  &:hover img {
    transform: scale(1.05);
  }
  &:hover .card-thumbnail {
    opacity: 0.8;
  }
`

export const NewsThumbnailBox = styled.div`
  width: 100%;
  height: 60%;
  transition: all 200ms ease-in-out;
`

export const NewsThumbnail = styled.img<{ image: string }>`
  background: url(${props => props.image});
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: all 200ms ease-in-out;
`

export const News = styled.div`
  margin: 5%;
`

export const NewsTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 3%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--color-dark);
`

export const NewsContent = styled.div`
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--color-grey);
`