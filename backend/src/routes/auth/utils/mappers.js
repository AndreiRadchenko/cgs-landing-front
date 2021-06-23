const mapSessionToResponse = (session) => ({
  accessToken: session.accessToken,
  accessTokenExpiresAt: session.accessTokenExpiresAt,
  refreshToken: session.refreshToken,
  refreshTokenExpiresAt: session.refreshTokenExpiresAt,
});

exports.mapSessionToResponse = mapSessionToResponse;
