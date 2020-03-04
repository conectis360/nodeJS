const mongoose = require("mongoose"),
{Schema} = mongoose,

userSchema = new Schema({
    name: {
        first: {
            type: String,
            trim: true
        },
        last: {
            type: String,
            trim: true            
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [1000, "código postal muito curto"],
        max: 99999
    },
    password: {
        type: String,
        required: true
    },
    couses: [{type: Schema.Types.ObjectId, ref: "Course"}],
    subscribedAccount: {type: Schema.Types.ObjectId, ref:
    "Subscriber"}
}, {
    timestamps: true
});

userSchema.virtual("fullName")
    .get(function() {
        return `${this.name.first} ${this.name.last}`;
    });

module.exports = mongoose.model("User", userSchema);