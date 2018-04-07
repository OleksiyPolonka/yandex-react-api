import { connect } from 'react-redux';
import Dashboard from '../../components/dashboard';
import showSpinner from '../../hocs/showSpinner';
import showError from '../../hocs/showError';
import fetchData from '../../hocs/fetchData';

import {fetchDisk} from '../../redux/modules/disk';
import {fetchFiles} from '../../redux/modules/files';

import * as R from 'ramda';
import { withProps } from 'recompact'

const mapStateToProps = ({disk, files}) => ({ disk, files });

function mapDispatchToProps(dispatch) {
  return {
    fetchDisk: (value) => dispatch(fetchDisk('AQAAAAAknEovAADLW3Mhtfz4MECttjJsce-YTU8')),
    fetchFiles: (value) => dispatch(fetchFiles('AQAAAAAknEovAADLW3Mhtfz4MECttjJsce-YTU8')),
  };
}

export default R.compose(
  connect(mapStateToProps, mapDispatchToProps),
  fetchData(
    ({fetchDisk, fetchFiles}) => {
      fetchDisk();
      fetchFiles();
    }
  ),
  showError,
  showSpinner,
  withProps(({disk, files}) => ({
    disk: disk.data,
    files
  }))
)(Dashboard);