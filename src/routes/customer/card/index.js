/**
 * Created by chenlijin on 2017/7/10.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Upload, Icon, Modal } from 'antd'

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList })
    this.props.upImage(this.state.fileList)
  }

  render () {
    const { previewVisible, previewImage, fileList } = this.state
    // const data = {
    //   viewable_type: 'Mercury::Product',
    //   viewable_id: '45',
    // }
    // const headers = {
    //   'Content-Type': 'application/json; charset=utf-8',
    //   'X-Mercury-Token': window.localStorage.getItem('mercury_api_key'),
    // }
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">图片上传</div>
      </div>
    )
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 4 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

PicturesWall.propTypes = {
  upImage: PropTypes.func,
}

export default PicturesWall
