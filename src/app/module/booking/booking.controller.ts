import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import { BookingServices } from './booking.service';

const createRental = catchAsync(async (req, res) => {
  const user = req.user;
  const bookingInfo = req.body;

  const result = await BookingServices.createRentalIntoDB(user, bookingInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rental created successfully',
    data: result,
  });
});

const returnBikeRental = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BookingServices.returnBikeRentalIntoDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Bike returned successfully',
    data: result,
  });
});
const getMyRentals = catchAsync(async (req, res) => {
  const user = req.user;

  const result = await BookingServices.getMyRentalsFromDB(user?._id);
  if (result.length <= 0) {
    return sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Rentals retrieved successfully',
    data: result,
  });
});

export const BookingControllers = {
  createRental,
  returnBikeRental,
  getMyRentals,
};
