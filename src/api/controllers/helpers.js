export function errorJSON(res, err) {
    res.status(200).json({
        success: false,
        message: err
    })
}