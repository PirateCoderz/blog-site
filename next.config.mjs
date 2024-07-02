/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ucarecdn.com',
                hostname: '"ik.imagekit.io"'
            },
            {
                protocol: 'https',
                hostname: '"ik.imagekit.io"'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
        ]
    },

    env: {

        DB_URI: 'mongodb+srv://pirateCoderz:studentPirateData@cluster0.j2phyin.mongodb.net/studentData?retryWrites=true&w=majority',
        USERNAME: 'pirateCoderz',
        PASSWORD: 'studentPirateData',

        urlEndPoint: 'https://ik.imagekit.io/8lpztmifb/',
        publicKey: 'public_JTAgYImkR0BrnLBiH8LguJ7FMPw=',
        privateKey: "private_6PG0VcYdQ3bSfma5w4QQYfRtYX4=",

        JWT_TOKEN: 'PeakTokenData33'
    }
};

export default nextConfig;
